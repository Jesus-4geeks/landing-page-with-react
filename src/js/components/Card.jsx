const Card = () => {
    return (
        <div className="card col-12 col-md px-0 text-center">
            <img src="https://picsum.photos/500/325" className="card-img-top" alt="Example photo" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae neque minus ipsum, sit assumenda illum cupiditate accusamus ratione nulla quas atque soluta tenetur veritatis velit ab asperiores ducimus, pariatur nisi.
                </p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );
};

export default Card;