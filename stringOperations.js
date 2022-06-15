let S = '4 5 6 +';

function solution(S) {
    const array = [];
    
    S = S.split(' ');
    
    S.forEach(element => {
        if (element > 0) {
            array.push(element);
        }
        if (element == 'pop') {
            array.pop();
        }
        if (element == 'DUP') {
            array.push(array[array.length-1]);
        }
        if (element == '+') {
            const sum = parseInt(array[array.length-1]) + parseInt(array[array.length-2]);
            array.pop();
            array.pop();
            array.push(sum)
        }
        if (element == '-') {
            const res = parseInt(array[array.length-1]) - parseInt(array[array.length-2])
            array.pop();
            array.pop();
            array.push(res)
        }
    
    });
    return array;
}

solution();