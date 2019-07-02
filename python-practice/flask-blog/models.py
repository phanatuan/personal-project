from myproject import db

class Posts(db.Model): 
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(128), nullable=False)
    body = db.Column(db.Text, nullable=False)
    author_name = db.Column(db.String(64), nullable=False)
    
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    comments = db.relationship('Comments', backref='posts', lazy='dynamic')

    def __init__(self, title, body, author_name): 
        self.title = title 
        self.body = body
        self.author_name = author_name

    def __repr__(self): 
        print(f'This {self.title} is written by {self.author_name}')

class Comments(db.Model): 
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key = True) 
    comment_body = db.Column(db.Text, nullable = False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    def __init__(self, comment_body, post_id): 
        self.comment_body = comment_body
        self.post_id = post_id

