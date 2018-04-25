import { connect } from 'react-redux';
import Index from '../../components/Index'

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    };
};

const DelayComponent = connect(mapStateToProps)(Index);

export default () => <DelayComponent />;
