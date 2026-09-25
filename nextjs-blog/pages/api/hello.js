
// creating the below function inside pages/api dir will provide an api path
//req is an instance of http.IncomingMessage plus middleware
// res is an instance of http.ServerResponse plus helper functions
export default function handler(req, res) {
    res.status(200).json({ text: 'hello'});
}
//test