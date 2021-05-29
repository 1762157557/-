import ajax from './ajax'
// 根据分类 ID 获取分类 
export const reqCategory = (categoryId) => ajax('/manage/category/info', {categoryId})

export const reqLogin=(username,password)=>ajax('/login',{username,password},'POST')


// 获取一级或某个二级分类列表 
export const reqCategorys = (parentId) => ajax('/manage/category/list', {parentId}) 


// 添加分类 

export const reqAddCategory = (parentId, categoryName) => ajax('/manage/category/add', { parentId, categoryName }, 'POST') 


// 更新品类名称 
export const reqUpdateCategory = ({categoryId, categoryName}) => ajax('/manage/category/update', { categoryId, categoryName }, 'POST')


// 获取商品分页列表 
export const reqProducts = (pageNum, pageSize) => ajax('/manage/product/list', {pageNum, pageSize})


// 根据 ID/Name 搜索产品分页列表
export const reqSearchProducts = (
    {pageNum, pageSize, searchType, searchName}) => ajax('/manage/product/search', { pageNum, pageSize, [searchType]: searchName, 
    }
    )

// 添加/更新商品 
export const reqAddOrUpdateProduct = (product) => ajax('/manage/product/' + (product._id ? 'update' : 'add'), product, 'post')


// 对商品进行上架/下架处理 
export const reqUpdateProductStatus = (productId, status) => ajax('/manage/product/updateStatus', { productId, status }, 'POST')


// 删除图片 
export const reqDeleteImg = (name) => ajax('/manage/img/delete', {name}, 'post')