interface RecordVO {
    id: string;
    title: string;
    artist: string;
    orgReleaseYear: string;
    label: string;
    coverUrl: string;
    addedDate: string;
    discogsUrl: string;
    theme: {
        color1: string;
        color2: string;
        color3: string;
        color4: string;
    };
}

export { type RecordVO };
