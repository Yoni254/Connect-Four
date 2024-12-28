import _ from 'lodash';
export type Columns = Array<Array<DiskColor>>
export type DiskColor = 'red' | 'blue' | 'empty';

export function checkWin(columns: Columns) {
    const columnsCopy = _.cloneDeep(columns);
    fillEmpty(columnsCopy);

    // Check for a win in the rows
    for (let i = 0; i < columnsCopy.length; i++) {
        for (let j = 0; j < columnsCopy[i].length - 3; j++) {
            if (columnsCopy[i][j] === 'empty') {
                continue;
            }
            if (columnsCopy[i][j] === columnsCopy[i][j + 1] && columnsCopy[i][j] === columnsCopy[i][j + 2] && columnsCopy[i][j] === columnsCopy[i][j + 3]) {
                return true;
            }
        }
    }

    // Check for a win in the columnsCopy
    for (let i = 0; i < columnsCopy.length - 3; i++) {
        for (let j = 0; j < columnsCopy[i].length; j++) {
            if (columnsCopy[i][j] === 'empty') {
                continue;
            }
            if (columnsCopy[i][j] === columnsCopy[i + 1][j] && columnsCopy[i][j] === columnsCopy[i + 2][j] && columnsCopy[i][j] === columnsCopy[i + 3][j]) {
                return true;
            }
        }
    }

    // Check for a win in the diagonals
    for (let i = 0; i < columnsCopy.length - 3; i++) {
        for (let j = 0; j < columnsCopy[i].length; j++) {
            if (columnsCopy[i][j] === 'empty') {
                continue;
            }
            if (columnsCopy[i][j] === columnsCopy[i + 1][j + 1] && columnsCopy[i][j] === columnsCopy[i + 2][j + 2] && columnsCopy[i][j] === columnsCopy[i + 3][j + 3]) {
                return true;
            }
            if (columnsCopy[i][j] === columnsCopy[i + 1][j - 1] && columnsCopy[i][j] === columnsCopy[i + 2][j - 2] && columnsCopy[i][j] === columnsCopy[i + 3][j - 3]) {
                return true;
            }
        }
    }

    return false;
}

function fillEmpty(columns: Columns) {
    const max = maxColumn(columns);
    for (let i = 0; i < columns.length; i++) {
        while (columns[i].length < max) {
            columns[i].push('empty');
        }
    }
}

function maxColumn(columns: Columns) {
    let max = 0;
    for (let i = 0; i < columns.length; i++) {
        if (columns[i].length > max) {
            max = columns[i].length;
        }
    }
    return max;
}