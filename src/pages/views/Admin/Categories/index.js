import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import apiCategory from './../../../../api/categoryApi';

const CategoriesManger = ({categories}) => {
    const removeHandle = async(id) => {
        const { data } = await apiCategory.remove(id);
        const newCategory = categories.filter(category => category.id !== data.id);
    }
    return (
        <div>
            {/* Page Heading */}
            
            {/* DataTales Example */}
            <button className="btn"><Link to="category/add">Thêm danh mục</Link></button>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                

                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Tên danh mục</th>
                                    <th scope="col">Mô tả</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category, index)=> (
                                <tr key={index}>
                                    <td>{index +1}</td>
                                    <td>{category.name}</td>
                                    <td>{category.desc}</td>
                                    <td>
                                            <Link className="btn btn-primary" to={`/admin/category/${category.id}`}>Sửa</Link>
                                            <button className="btn btn-danger" onClick={() => removeHandle(category.id)}>Xóa</button>
                                        </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

CategoriesManger.propTypes = {

}

export default CategoriesManger
