const fibonacci = (req, res, next) => {
    const { n } = req.body
    let fibo = []
    if(n===1) {
        fibo=[0]
    } else if (n<2) {
        fibo=[0,1,1]
    } else {
        fibo = [0,1]
        let i=2
        do {
            let a=fibo[i-1] + fibo[i-2]
            fibo.push(a)
            i++
        } while(fibo[i-1]<=n)
        fibo.pop()
    }
    res.json({
        data: fibo.join(" "),
        message: 'Success'
    })
}

exports.fibonacci = fibonacci