document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function() {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    console.log(rows);
    for (const [i, row] of rows.entries) {
        const [first, second] = row.toLowerCase().trim().split('_');
        console.log(row, first, second);
        const output = `${first} ${second.replace(second[0],second[0].toUpperCase)}`;
        console.log(`${output.padEnd(20)}${'V'.repeat(i+1)}`);
    }
});