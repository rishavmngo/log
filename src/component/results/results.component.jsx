import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import Post from "../post/post.component";
import "./results.style.css";

export default function ResultsComp() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [post, setPost] = useState([]);
	useEffect(() => {
		// if (searchParams.get("search_query").length <= 0) return;
		async function fetchData() {
			try {
				const result = await axios.post(
					`http://localhost:5000/api/search/`,
					{ search_query: searchParams.get("search_query") }
				);

				console.log(result.data);
				setPost(result.data);
			} catch (error) {}
		}
		fetchData();
	}, [searchParams]);

	return (
		<div className="results">
			<div className="result--post__sort">FILTERS</div>
			{post.map((i) => (
				<Post post={i} />
			))}
		</div>
	);
}
