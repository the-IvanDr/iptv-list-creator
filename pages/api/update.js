import { UpdateList } from "../../utils/firebaseAPI";

export default async function updateHandler(req, res) {
    const list = req.body == '[]' ? [] : JSON.parse(req.body);
    const response = await UpdateList(list);

    if (response.status === 200)
        return res.status(200).json({ success: true });
    else
        return res.status(500).json({ errMessage: 'Firebase error', fireBaseStatus: response.status });
}
