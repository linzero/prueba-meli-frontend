import React from 'react'
import { Link } from 'react-router-dom'

export const ListComponent = ({items=[]}) => {
    return (
        <div className="bg-white p-3">
            {
                items.map((item, index) => {
                    return (
                        index < 4 &&
                        <Link to={ `/items/${ item.id }` }>

                            <div className="d-flex mb-3 content-product-list" key={item['id']}>
                                <div className="image-content">
                                    <img alt={item.title} src={item.thumbnail} />
                                </div>
                                <div className="p-3 data-content">
                                    <h2 className="price-content">${new Intl.NumberFormat().format(item.price)}</h2>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}
