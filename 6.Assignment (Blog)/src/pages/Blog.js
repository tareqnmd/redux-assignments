const Blog = () => {
	return (
		<>
			<div class="container mt-8">
				<a href="index.html" class="inline-block text-gray-600 home-btn" id="lws-goHome">
					<i class="mr-2 fa-solid fa-house"></i>Go Home
				</a>
			</div>
			<section className="post-page-container">
				<main className="post">
					<img
						src="./images/mern.webp"
						alt="githum"
						className="w-full rounded-md"
						id="lws-megaThumb"
					/>
					<div>
						<h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
							MERN stack for Web Development
						</h1>
						<div className="tags" id="lws-singleTags">
							<span>#python,</span> <span>#tech,</span> <span>#git</span>
						</div>
						<div className="btn-group">
							<button className="like-btn" id="lws-singleLinks">
								<i className="fa-regular fa-thumbs-up"></i> 100
							</button>
							<button className="active save-btn" id="lws-singleSavedBtn">
								<i className="fa-regular fa-bookmark"></i> Saved
							</button>
						</div>
						<div className="mt-6">
							<p>
								A MERN stack comprises a collection of four frameworks (MongoDB, ExpressJs, ReactJs
								and NodeJs) used to develop full-stack javascript solutions for rapid, scalable, and
								secure applications. Each framework serves a different purpose in creating
								successful web applications. It is an excellent choice for companies looking to
								develop high-quality responsive applications quickly using just one language.
							</p>
						</div>
					</div>
				</main>
				<aside>
					<h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
						Related Posts
					</h4>
					<div className="space-y-4 related-post-container">
						<div className="card">
							<a href="post.html">
								<img src="./images/git.webp" className="card-image" alt="" />
							</a>
							<div className="p-4">
								<a href="post.html" className="text-lg post-title lws-RelatedPostTitle">
									Top Github Alternatives
								</a>
								<div className="mb-0 tags">
									<span>#python,</span> <span>#tech,</span> <span>#git</span>
								</div>
								<p>2010-03-27</p>
							</div>
						</div>
						<div className="card">
							<a href="post.html">
								<img src="./images/ai.jpg" className="card-image" alt="" />
							</a>
							<div className="p-4">
								<a href="post.html" className="text-lg post-title lws-RelatedPostTitle">
									The future of Artificial Inteligence
								</a>
								<div className="mb-0 tags">
									<span>#python,</span> <span>#tech,</span> <span>#git</span>
								</div>
								<p>2020-07-15</p>
							</div>
						</div>
					</div>
				</aside>
			</section>
		</>
	);
};

export default Blog;
