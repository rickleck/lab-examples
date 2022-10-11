export class Copy {
    /** @type {object}[] */
    static pages = [
        {
            id: 'page-array',
            names: [
                'Adam',
                'Carl',
                'Christer A',
                'Christer S',
                'Erik N',
                'Ivan',
                'Ivona',
                'Joakim',
                'Johannes',
                'Lars-Erik',
                'Matewos',
                'Miriam',
                'Niklas',
                'Ola',
                'Rickard',
                'Robert',
            ],
            steps: [
                'Create a new array containing 8 persons. Each person should have the properties name, age and height. At least 3 persons must be taller than 2 meters.',
                'Create another array containing 4 persons, each also having the properties name, age and height.',
                'Combine the two arrays.',
                'Using the filter() method, create a new array that only includes the persons taller than 2 meters.',
                'Using the forEach() method, log all persons taller than 2 meters to the console.',
            ],
            instruction: '* Click on a stack for more details.',
        },
        {
            id: 'page-switch',
            steps: [
                'Create a switch that logs the value corresponding to a parameter:',
                'Create another switch corresponding to:',
            ],
            params: [
                [
                    { param: '0', value: 'Nisse' },
                    { param: '1', value: 'Per' },
                    { param: '2', value: 'Johannes' },
                    { param: '3', value: 'Joakim' },
                    { param: 'other', value: 'Hans' },
                ],
                [
                    { param: '0', value: 'Umeå' },
                    { param: '1-5', value: 'Stockholm' },
                    { param: '6-9', value: 'Mora' },
                    { param: '10-14', value: 'Västerås' },
                    { param: '15-19', value: 'Göteborg' },
                    { param: 'other', value: 'Malmö' },
                ],
            ],
            instruction: '* Input a number.',
        },
    ];

    /**
     * @param {string} id
     * @returns {object} page copy object
     */
    static getPage(id) {
        return Copy.pages.find((page) => page.id === id);
    }
}
