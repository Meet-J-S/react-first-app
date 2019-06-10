import React, {} from 'react';
import '../styles/list.scss';
import 'antd/dist/antd.css';
import {Table, Input, Button, Icon, notification} from 'antd';
import Highlighter from 'react-highlight-words';
import axios from "axios";

let dataArray;

const INITIAL_STATE = {
    searchText: '',
    loader: true
};

const vals = [
    {
        a: 'a',
        b: 'b',
        c: 'c',
    }, {
        a: 'd',
        b: 'e',
        c: 'f',
    }
];

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }

    componentWillMount = () => {
        const {handleLocalAction, localActions} = this.props;

        handleLocalAction({
            type: localActions.GET_USER_DETAILS
        });
    };

    componentWillReceiveProps = (nextProps, nextContext) => {
        const userDetails = nextProps.userDetails;
        if (userDetails && userDetails !== dataArray) {
            dataArray = userDetails;
            this.setState({loader: false});
        } else {
            alert('Something went wrong : ')
        }
    };

    appendRows =  (
        vals.map((obj, index) => (
            <tr>
                <td>{obj.a}</td>
                <td>{obj.b}</td>
                <td>{obj.c}</td>
            </tr>
        ))
    );

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 18 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 15, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ marginRight: 8 }}
                    className={'customBtn'}
                >
                    Search
                </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small"  className={'customBtn'}>
                    Reset
                </Button>
            </div>
        ),
        filterIcon: () => (
            <Icon type="search" style={{ color: '#1890ff' }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffea46', padding: 1 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    });

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    render() {
        const {loader} = this.state;
        const columns = [
            {
                title: 'Id',
                dataIndex: 'id',
                key: 'id',
                width: '30%',
                align: 'center',
                ...this.getColumnSearchProps('id'),
            },
            {
                title: 'Name',
                dataIndex: 'user_name',
                key: 'user_name',
                width: '35%',
                align: 'center',
                ...this.getColumnSearchProps('user_name'),
            },
            {
                title: 'Password',
                dataIndex: 'user_pass',
                key: 'user_pass',
                width: '35%',
                align: 'center',
                ...this.getColumnSearchProps('user_pass'),
            },
        ];
        return (
            <div className={'body'}>
                {/*<table style={{backgroundColor: '#ffc0e3', height: 200}} border="5">*/}
                    {/*{this.appendRows}*/}
                {/*</table>*/}
                <div className={'table-root'}>
                    <Table columns={columns} dataSource={dataArray} className={'table'} loading={loader}/>
                </div>
            </div>
        );
    }
}

export default List;