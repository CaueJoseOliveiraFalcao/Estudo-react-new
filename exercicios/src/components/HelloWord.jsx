import React from 'react';
import Pessoa from './Pessoa';
import PropTypes from 'prop-types'
function HelloWord() {
    return (
        <section>
            <h1>wow wow</h1>
            <Pessoa marca='fe3rrari top' lancamento='2007' />
        </section>
    )
}
HelloWord.propTypes = {
    //marca: PropTypes.string,
    //lancamento: PropTypes.string
}
HelloWord.defaultProps = {
    marca: 'Faltou a marca',
    lancamento: 0
}
export default HelloWord