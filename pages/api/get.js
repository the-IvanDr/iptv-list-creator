import fs from 'fs';
import path from 'path';

export default function getListHandler(req, res) {
    const jsonPath = path.resolve(__dirname, '..', '..', '..', '..', 'public', 'iptvlist.json');
    const list = JSON.parse(fs.readFileSync(jsonPath));

    console.log('list:', list);

    return res.status(200).json({ list });
}