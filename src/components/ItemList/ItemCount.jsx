import "./itemCount.css";

function ItemCount ({add, subtract, count, onAdd}) {

  return (
    <>
      <div className="flex-container">
        <div className="text-center">
          <div className="card-body">
            <div className="contenedor">
                <button className="boton" onClick={subtract}>
                    <span className="span s1"></span>
                    <span className="span s2"></span>
                    <span className="span s3"></span>
                    <span className="span s4"></span>
                    Eliminar
                </button>
                <span className="contador">{count}</span>
                <button className="boton" onClick={add}>
                    <span className="span s1"></span>
                    <span className="span s2"></span>
                    <span className="span s3"></span>
                    <span className="span s4"></span>
                    Agregar
                </button>
            </div>
            <div>
                <button className="boton" onClick={() => {onAdd(count)}}>
                    <span className="span s1"></span>
                    <span className="span s2"></span>
                    <span className="span s3"></span>
                    <span className="span s4"></span>
                    Agregar al carrito
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemCount