const Query = { 
    hello() {
        return ("Hello World")
    }, 
    async todos(parent, args, {prisma}, info) { 
        return prisma.query.todoes({}, info)
    }
}

export {Query as default}