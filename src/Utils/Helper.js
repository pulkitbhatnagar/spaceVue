export function numberToComma(number = '') {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function tConvert(time) {
    time = time
        .toString()
        .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
        time = time.slice(1);
        time[5] = +time[0] < 12 ? 'AM' : 'PM';
        time[0] = +time[0] % 12 || 12;
    }
    return time.join('');
}

export function processAmountInData(data) {
    let updateData = data.map((val) => {
        return {
            ...val,
            price: '$' + numberToComma(val.price),
            time: tConvert(val.time),
        };
    });
    return updateData;
}
