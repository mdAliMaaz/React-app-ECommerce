import { styled } from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newletter'
import Footer from '../components/Footer'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'






const Container = styled.div`

`

const Title = styled.h1`
margin: 20px;

`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`

const Fliter = styled.div`
margin: 20px;
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({ fontSize: '16px' })}
`
const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({ padding: '2px' })}
`
const Option = styled.option`

`

const ProductList = () => {

    const location = useLocation();

    const cat = location.pathname.split('/')[2];

    const [filter, setFilter] = useState();
    const [sort, setSort] = useState("newest");

    const handleFilter = (e) => {
        const Value = e.target.value;
        setFilter(
            {
                ...filter,
                [e.target.name]: Value,
            }
        )
    }




    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Fliter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name='color' onChange={handleFilter}>
                        <option disabled >Color</option>
                        <option>black</option>
                        <option>white</option>
                        <option>shirt</option>
                        <option>men</option>
                        <option>women</option>
                    </Select>
                    <Select name='size' onChange={handleFilter}>
                        <option disabled >Size</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </Select>
                </Fliter>
                <Fliter><FilterText>Sort Products:</FilterText>
                    <Select onChange={e => setSort(e.target.value)}>
                        <option value="newest">Newest</option>
                        <option value="asc">Price(Asc)</option>
                        <option value="dsc">Price(Desc)</option>
                    </Select>
                </Fliter>
            </FilterContainer>
            <Products cat={cat} filter={filter} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
