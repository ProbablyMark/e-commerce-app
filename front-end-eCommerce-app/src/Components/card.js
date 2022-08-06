function Card(props) {
    return (
        <div className={props.cardClass}>
            {props.children}

            <figure>
                <img alt="" src={props.data.gallery[0]} />
            </figure>
            <div className={props.cardDetailsClass}>
                <p className="title">{props.data.name}</p>
                <div>
                    <strong>
                        {props.data.prices[props.state.currency.currentCurrency].currency.symbol}
                        {props.data.prices[props.state.currency.currentCurrency].amount}
                    </strong>
                </div>
            </div>
        </div>
    );
}

export default Card;
