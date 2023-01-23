type RecordData = {
    readonly id: string;
    album: string;
    artist: string;
    year: number;
    label: string;
    cover: {
        front: string;
        extra?: string;
    };
    description: {
        text: string;
        srcUrl: string;
    };
    addedDate: string;
    colorTheme: [string, string, string, string];
    discogsUrl: string;
};

type RecordCreateData = Omit<RecordData, 'id'>;
type RecordUpdateData = Partial<RecordCreateData>;

export { type RecordData, type RecordCreateData, type RecordUpdateData };
