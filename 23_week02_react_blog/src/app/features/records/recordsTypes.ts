import { WithLoadingState } from '@/utils/types/stateTypes';

type RecordData = {
    readonly id: string;
    readonly protected?: boolean;
    album: string;
    artist: string;
    year: number;
    label: string;
    cover: string;
    description: {
        text: string;
        srcUrl: string;
    };
    addedDate: string;
    colorTheme: [string, string, string, string];
    discogsUrl: string;
    modifiedAt?: string;
};

type RecordCreateData = Omit<RecordData, 'id'>;
type RecordUpdateData = Partial<RecordCreateData>;

type RecordsState = WithLoadingState & {
    items: RecordData[];
};

export { type RecordsState, type RecordData, type RecordCreateData, type RecordUpdateData };
