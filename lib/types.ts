export interface Config {
    /**
     * r: (rows) defines the number of "rows" of the slot machine.
     * For example, a 5x3 slot machine, will have `r = 3`.
     * The number or rows should be defined taking into consideration
     * the `m` (mask) array.
     * @type {number}
     * @memberof Config
     */
    r: number;
    /**
     * w: (weights) defines the symbol weights for each "reel".
     * For example, a 5x3 slot machine, will have `5` arrays,
     * each one, containing weights for each symbol. The following example,
     * defines 6 symbols in a 5xN slot machine:
     * @example 
     * w = [
     *  [100, 50, 40, 10, 5, 1], // this is the first reel
     *  [100, 50, 40, 10, 5, 1], // this is the second reel
     *  [100, 50, 40, 10, 5, 1], // this is the third reel
     *  [100, 50, 40, 10, 5, 1], // this is the forth reel
     *  [100, 50, 40, 10, 5, 1], // this is the fifth reel
     * ]
     * @type {Array<number[]>}
     * @memberof Config
     */
    w: Array<number[]>
    /**
     * m: (mask) ‾-_-‾ defines the playable-line paths in the slot machine.
     * Each line must define X and Y coordinates on the grid. To reduce this object,
     * the X is represented by array index and the Y by the value itself.
     * 
     * For example, a slot machine 5x3, could have 5 playable lines defined as follow.
     * @example
     * [
     *  [0,0,0,0,0] // ‾‾‾‾‾ the first row is a line
     *  [1,1,1,1,1] // ----- the second row is a line
     *  [2,2,2,2,2] // _____ the third row is a line
     *  [0,1,2,1,0] // ‾-_-‾ the forth line is crossing the rows
     *  [2,1,0,1,2] // _-‾-_ the forth line is crossing the rows 
     * ]
     * @type {Array<number[]>}
     * @memberof Config
     */
    m: Array<number[]>;
    /**
     * p: (pay-table) defines the prizes for each symbol combination.
     * The number of elements must match symbol weights definition.
     * 
     * For example in a 5x3 slot configuration, having 10 configured symbols,
     * the pay-table must contain 10 elements having up to 5 possible payouts.
     * 
     * Say you want to define bananas payout like this:
     * a single banana pays 0
     * a combo of 2 bananas, pays 0
     * a combo of 3 bananas, pays 0
     * a combo of 4 bananas, pays 1
     * a combo of 5 bananas, pays 2
     * you will define it like:
     * 
     * [0,0,0,1,2]
     * 
     * The index of the array is considered as the number of instances in the combo.
     * The value represent the prize itself.
     * @type {Array<number[]>}
     * @memberof Config
     */
    p: Array<number[]>;
    wild?: {
        index: number
    }
}

export interface ProcessedLine {
    i: number
    combo: number
    prize: number
    wc: number
    ss: Array<number>
}

export interface Result {
    prize: number
    lines: Array<ProcessedLine>
}