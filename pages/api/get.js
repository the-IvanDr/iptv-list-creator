import { GetList } from "../../utils/firebaseAPI";

export default async function getListHandler(req, res) {
    const list = await GetList();
    return res.status(200).json({ list });
}