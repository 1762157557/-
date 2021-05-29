import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Select,
  Input
} from 'antd'

const Item = Form.Item
const Option = Select.Option
/*
修改分类的form组件
 */
export default  class AddForm extends Component {
    constructor(props)
    {
        super(props)
        this.form=React.createRef()

    }

  static propTypes = {
    setForm: PropTypes.func.isRequired, // 用来传递form对象的函数
    categorys: PropTypes.array.isRequired, // 一级分类的数组
    parentId: PropTypes.string.isRequired, // 父分类的ID
  }

  componentWillMount () {
    console.log(this.form);
    this.props.setForm(this.form)
  }


  render() {
    const {categoryName} = this.props
    return (
      <Form ref={this.form}>

        <Item
        name="categoryName"
        initialValue={categoryName}
        rules={
            [
                {required: true, message: '分类名称必须输入'}
            ]
        }
        >
          {
            (
              <Input />
            )
          }
        </Item>
      </Form>
    )
  }
}



