
const ADJECTIVES = [
    'cultural',
    'wide-eyed',
    'naive',
    'tiny',
    'selfish',
    'tightfisted',
    'better',
    'jobless',
    'cheap',
    'modern'
]

const OBJECTS = [
    'bag',
    'printer',
    'sword',
    'machine',
    'thread',
    'pencil',
    'coffee',
    'remote',
    'magnet',
    'stone',
]

function genRandomUsername() {
    const adj = ADJECTIVES[Math.floor(Math.random() * 10)]
    const obj = OBJECTS[Math.floor(Math.random() * 10)]
    return `${adj}-${obj}`
}

module.exports = {
    genRandomUsername
}

/*
//Test Code
console.log(genRandomUsername())
console.log(genRandomUsername())
console.log(genRandomUsername())
console.log(genRandomUsername())
console.log(genRandomUsername())

*/