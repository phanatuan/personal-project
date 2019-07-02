const Mutation = { 
    async createTodo(parent, args, {prisma}, info) { 
        
        const { text, isDone } = args.data
        return prisma.mutation.createTodo({
            data: {
                text, isDone
            }
        })
    },

    async deleteTodo(parent, args, {prisma}, info) { 
        const {id} = args
        return prisma.mutation.deleteTodo({
            where: {id}
        })
    }, 

    async updateTodo(parent, args, {prisma }, info) { 
        const {id } = args 
        const { text, isDone } = args.data 
        return prisma.mutation.updateTodo({
            where: { id }, 
            data: { text, isDone }
        })
    }
}

export { Mutation as default }