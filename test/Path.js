import path from 'path';

const rootString = '../src/js';

const root = path.resolve(__dirname, rootString);

const Path = {
    root,
    components: path.resolve(__dirname, rootString + '/components'),
    reducers: path.resolve(__dirname, rootString + '/reducers')
};

export default Path;