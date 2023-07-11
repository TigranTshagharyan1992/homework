import React from 'react';
import Table from '../../components/table';
import Loading from '../../components/loading';
import {Pagination, Space} from 'antd';
import Search from "antd/es/input/Search";



class CryptoCurrencyList extends React.Component {
    constructor() {  //1
        super();
        this.state = { //
            loading: false,
            data: [],
            error: null,
            page: 1,
            pageSize:10,
        };
        this.handleGetCurrenciesList = this.handleGetCurrenciesList.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }



    async handleGetCurrenciesList(page=false,pageSize=false,searchValue) {

        this.setState({
            loading: true,
        });

        try {
            if(page){
                await this.setState({
                    page:page,
                });
            }
            if(pageSize){
                await this.setState({
                    pageSize:pageSize,
                });
            }
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/?page=${this.state.page}&per_page=${this.state.pageSize}`);
            const result = await response.json();
            console.log(result);
            this.setState({
                data: result
            });

        } catch(error) {
            this.setState({
                error: 'Errror Ooooooops'
            })
        } finally {
            this.setState({
                loading: false,
            })
        }
    }



    componentDidMount() { 
        this.handleGetCurrenciesList(); //backend data
    }
    async onSearch(searchValue){
        await this.handleGetCurrenciesList();
        if(searchValue){
            const filterData = await this.state.data.filter( (item) => {
                return (searchValue.toLowerCase() == item.symbol.toLowerCase() || searchValue.toLowerCase() == item.name.toLowerCase());
            });
            await this.setState({
                data: filterData
            });
        }
    };
    render() {  
        const { loading, error, data } = this.state;
        
        if (loading) {
            return (
                <div className='loading-container'>
                    <Loading width="80px" height="80px" />
                </div>
            )
        }
        return (
            <div>
                <Search placeholder="input search text" onSearch={this.onSearch} enterButton />
                <Table currencyList={data} />
               <Pagination onChange={this.handleGetCurrenciesList} defaultCurrent={this.state.page} total={500} defaultPageSize={this.state.pageSize}/>;
            </div>
        )
    }
}

export default CryptoCurrencyList;