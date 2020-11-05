import * as bull from 'bull';
export interface Options {
    promClient?: any;
    interval?: number;
    metricsPrefix?: string;
}
export declare function init(opts: Options): {
    start: (queue: bull.Queue) => {
        stop: () => any;
    };
};
