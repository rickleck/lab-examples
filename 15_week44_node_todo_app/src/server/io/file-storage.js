import fsx from 'fs-extra';
import { Storage } from '@google-cloud/storage';
import { Constants } from '../constants/constants.js';

export class FileStorage {
    /**
     * @type {File}
     */
    static #gcloudFile;

    /**
     * @returns {File}
     */
    static get gcloudFile() {
        if (!this.#gcloudFile) {
            this.#gcloudFile = new Storage()
                .bucket(process.env.GCLOUD_STORAGE_BUCKET)
                .file(process.env.GCLOUD_DATA_PATH);
        }
        return this.#gcloudFile;
    }

    /**
     * @returns {string}
     */
    static get localFile() {
        return Constants.LOCAL_DATA_PATH;
    }

    /**
     * @returns {Promise}
     */
    static async readFile() {
        if (process.env.NODE_ENV === Constants.ENV_DEV_LOCAL) {
            return await fsx.readJson(this.localFile);
        } else {
            return new Promise((resolve, reject) => {
                this.gcloudFile
                    .download()
                    .then((data) => {
                        resolve(JSON.parse(data[0].toString('utf8')));
                    })
                    .catch((error) => reject(error));
            });
        }
    }

    /**
     * @returns {Promise}
     */
    static async writeFile(data) {
        if (process.env.NODE_ENV === Constants.ENV_DEV_LOCAL) {
            return await fsx.writeJson(this.localFile, data);
        } else {
            return await this.gcloudFile.save(JSON.stringify(data), {
                contentType: 'auto',
                resumable: false,
            });
        }
    }
}
