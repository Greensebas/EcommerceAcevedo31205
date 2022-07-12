import "./itemCount.css";

function ItemCount ({add, subtract, count, onAdd}) {

  return (
    <>
      <div className="flex-container">
        <div className="text-center">
          <div className="card-body">
            <div className="contenedor align-middle">
                <div className="simbol" onClick={subtract}>
                  <i class="bi bi-dash-circle-fill"></i>
                </div>
                <div className="contador">{count}</div>
                <div className="simbol" onClick={add}>
                  <i class="bi bi-plus-circle-fill"></i>
                </div>
            </div>
            <div>
                <button className="btn btn-outline-dark" onClick={() => {onAdd(count)}}>Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemCount

// <i class="bi bi-plus-circle-dotted"></i>