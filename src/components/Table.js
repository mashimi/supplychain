import React, { Component } from 'react';

class Table extends Component {

  render() {
    return (
      <div id="content">
        <h1>{this.props.name}</h1>
        <h1>Custodian: {this.props.custodian}</h1>
        <h1><a href={`http://localhost:3000?address=${this.props.contractAddress}`} target="_blank">External Link</a></h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Owner</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="productList">
            {/* { this.props.products.map((product, key) => { */}
            {/*   return( */}
            {/*     <tr key={key}> */}
            {/*       <th scope="row">{product.id.toString()}</th> */}
            {/*       <td>{product.name}</td> */}
            {/*       <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td> */}
            {/*       <td>{product.owner}</td> */}
            {/*       <td> */}
            {/*         { !product.purchased */}
            {/*           ? <button */}
            {/*               name={product.id} */}
            {/*               value={product.price} */}
            {/*               onClick={(event) => { */}
            {/*                 this.props.purchaseProduct(event.target.name, event.target.value) */}
            {/*               }} */}
            {/*             > */}
            {/*               Buy */}
            {/*             </button> */}
            {/*           : null */}
            {/*         } */}
            {/*         </td> */}
            {/*     </tr> */}
            {/*   ) */}
            {/* })} */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
