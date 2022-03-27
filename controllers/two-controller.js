const combination = (req, res, next) => {
    const { n, r } = req.body
    let a = 1
    for(let i = 1; i<=n; i++) {
        a=a*i
    }

    let b = 1
    for(let i = 1; i<=r; i++) {
        b=b*i
    }

    let c = 1
    for(let i = 1; i<=(n-r); i++) {
        c=c*i
    }

    const hasil = a/(b*c)
    res.json({
        result: hasil
    })
}

exports.combination = combination