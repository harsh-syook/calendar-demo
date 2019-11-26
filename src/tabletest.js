import React from 'react'
import ReactTabulous from '@syook/react-tabulous'
import {Button,Input} from 'semantic-ui-react'
export default class TableTest extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[{id:1,name:'harsh',description:'something', isDeleted:false},
                    {id:2,name:'dh',description:'dadss', isDeleted:true}]
        }
    }
    onDelete = ids => {
        console.log('onDelete', ids);
      };
      
      onShow = rowObject => {
        console.log('onShow', rowObject);
      };
      
      onEdit = rowObject => {
        console.log('onEdit', rowObject);
      };
      
      onInputChange = ({ rowObject, value: newValue }) => {
          const obj = this.state.data.find(item=>item.id ===rowObject.id)
          obj.name = newValue
          this.setState(prev=>{
              return{
                  data:[...prev.data.filter(item=>item.id !== rowObject.id),obj]
              }
          })
        console.log({ rowObject, newValue });
      };
    columnDefs = [
        {
          headerName: 'Name',
          field: 'name',
          type: 'String',
          cell: rowObject => (
            <Input value={rowObject.name} onChange={(_e, { value }) => this.onInputChange({ value, rowObject })} />
          ),
          isSortable: true,
          isSearchable: true,
          isFilterable: true,
        },
        {
          headerName: 'Description',
          field: 'description',
          type: 'String',
          cell: rowObject => rowObject.description,
          isSortable: true,
          isSearchable: true,
          isFilterable: true,
          isResizable: true,
        }]

        updatingObjectId = () => false;

actionDefs = [
  {
    name: 'Show',
    isVisible: _rowObject => true,
    isDisabled: rowObject => this.updatingObjectId === (rowObject['id'] || rowObject['_id']),
    isLoading: rowObject => this.updatingObjectId === (rowObject['id'] || rowObject['_id']),
    function: this.onShow,
    icon: 'eye',
    color: '#85C1E9',
  },
  {
    name: 'Delete',
    isVisible: rowObject => !rowObject.isDeleted,
    isDisabled: rowObject => this.updatingObjectId === (rowObject['id'] || rowObject['_id']),
    isLoading: rowObject => this.updatingObjectId === (rowObject['id'] || rowObject['_id']),
    function: rowObject => this.onDelete(rowObject),
    icon: 'trash',
    color: '#E8515D',
  },
  
];



    render(){
        return(
            <div>
                <ReactTabulous
                    data={this.state.data}
                    columnDefs={this.columnDefs}
                    actionDefs={this.actionDefs}
                    includeAction={true}
  mandatoryFields={['Name']}
  name={'Table Name'}
                
                />

            </div>
        )
    }
}