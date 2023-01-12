
import knexLib from 'knex'

class ContenedorSQL {
    constructor(config, table) {
      this.knex = knexLib(config)
      this.table = table
    }
  
    async save(item) {
        try {
            return this.knex(this.table).insert(item)
        } catch (err) {
            console.log('Error escritura en base de datos', err)
        }
    }

    async getById(id) {
        try {
            return this.knex(this.table).where('id', id).select('*')
        } catch (err) {
            console.log('El producto buscado no existe', err)
        }
    }

    async getAll() {
        try {
            return this.knex(this.table).select('*')
        } catch (err) {
            console.log('Error al listar productos', err)
        }
    }

    async deleteById(id) {
        try {
            return this.knex(this.table).where('id', id).delete()
        } catch (err) {
            console.log('Error al eliminar producto', err)
        }
    }

    async deleteAll() {
        try {
            return this.knex(this.table).delete()
        } catch (err) {
            console.log('Error al eliminar todos los productos', err)
        }
    }

    close () {
        this.knex.destroy()
    }

}

export default ContenedorSQL