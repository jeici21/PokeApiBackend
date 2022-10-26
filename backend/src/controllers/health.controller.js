
/// Health controller
export const getHealth = (_, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache');
    res.json({ status: "available" });
}