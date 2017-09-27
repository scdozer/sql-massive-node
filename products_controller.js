module.exports= {
  create: (req, res, next) =>{
    const dbInstance = req.app.get('db');
    const { name, description, price, imageurl } = reg.body;
    dbInstance.create_product({name, description, price, imageurl})
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },
  getOne: (req, res, next) =>{
    const dbInstance = req.app.get('db');
    const { id  } = req.params;
    dbInstance.read_product({id: id})
      .then( (product) => res.status(200).send(product) )
      .catch( () => res.status(500).send() );
  },
  getAll: (req, res, next) =>{
    const dbInstance = req.app.get('db');
    dbInstance.read_products()
      .then( (products) => res.status(200).send(products) )
      .catch( () => res.status(500).send() );
  },
  update: (req, res, next) =>{
    const dbInstance = req.app.get('db');
    const { params, query } = req;
    dbInstance.update_product({id: params.id, description: query.desc })
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },
  delete: (req, res, next) =>{
    const dbInstance = req.app.get('db');
    const { id } = req.params;
    dbInstance.delete_product({id: id})
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },
}
