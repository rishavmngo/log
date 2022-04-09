import React, { useState } from "react";
import "./themeButton.style.css";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { theme } from "../../../utils/theme";
import { useDispatch } from "react-redux";
import { toggleDarkTheme } from "../../../store/preferences/preferencesSlice";
import { useSelector } from "react-redux";

export default function ThemeButton() {
	const dispatch = useDispatch();
	const darkThemeOn = useSelector((state) => state.preference.darkThemeOn);

	function handleTheme() {
		if (darkThemeOn) {
			document.documentElement.style.setProperty(
				"--log-component-main-color",
				theme.dark.component_main_color
			);
			document.documentElement.style.setProperty(
				"--log-navbar_user_color",
				theme.dark.navbar_user_color
			);
			document.documentElement.style.setProperty(
				"--log-navbar-color",
				theme.dark.navbar_color
			);
			document.documentElement.style.setProperty(
				"--log-navbar-user-name-color",
				theme.dark.navbar_user_name_color
			);

			document.documentElement.style.setProperty(
				"--log-social-item-color",
				theme.dark.social_colors
			);
			document.documentElement.style.setProperty(
				"--log-sidebar-color",
				theme.dark.sidebar_color
			);
			document.documentElement.style.setProperty(
				"--log-post-color",
				theme.dark.feed_post_color
			);
			document.documentElement.style.setProperty(
				"--log-body-color",
				theme.dark.body_color
			);
			document.documentElement.style.setProperty(
				"--log-feed-post-author-name-color",
				theme.dark.feed_post_author_name_color
			);
			document.documentElement.style.setProperty(
				"--log-feed-post-author-name-hover-color",
				theme.dark.feed_post_author_name_hover_color
			);
			document.documentElement.style.setProperty(
				"--log-feed-post-publish-date-color",
				theme.dark.feed_post_publish_date_color
			);

			document.documentElement.style.setProperty(
				"--log-feed-post-publish-date-hover-color",
				theme.dark.feed_post_publish_date_hover_color
			);
			document.documentElement.style.setProperty(
				"--log-feed-post-title-color",
				theme.dark.feed_post_title_color
			);

			document.documentElement.style.setProperty(
				"--log-feed-post-title-hover-color",
				theme.dark.feed_post_title_hover_color
			);
			document.documentElement.style.setProperty(
				"--log-feed-post-tag-hover-outline-color",
				theme.dark.feed_post_tag_hover_outline_color
			);
			document.documentElement.style.setProperty(
				"--log-feed-post-tag-hover-background-color",
				theme.dark.feed_post_tag_hover_background_color
			);

			document.documentElement.style.setProperty(
				"--log-feed-post-tag-text-color",
				theme.dark.feed_post_tag_text_color
			);
			document.documentElement.style.setProperty(
				"--log-feed-post-tag-hover-color",
				theme.dark.feed_post_tag_hover_text_color
			);

			document.documentElement.style.setProperty(
				"--log-homepage-sidebar-tab-icon-color",
				theme.dark.homepage_sidebar_tab_icon_color
			);
			document.documentElement.style.setProperty(
				"--log-homepage-sidebar-tab-text-color",
				theme.dark.homepage_sidebar_tab_text_color
			);
			document.documentElement.style.setProperty(
				"--log-homepage-post-options-text-color",
				theme.dark.homepage_post_options_text_color
			);
			document.documentElement.style.setProperty(
				"--log-homepage-post-options-hover-text-color",
				theme.dark.homepage_post_options_hover_text_color
			);

			document.documentElement.style.setProperty(
				"--log-homepage-post-options-save-background-color",
				theme.dark.homepage_post_options_save_background_color
			);
			document.documentElement.style.setProperty(
				"--log-homepage-post-options-save-text-color",
				theme.dark.homepage_post_options_save_text_color
			);

			document.documentElement.style.setProperty(
				"--log-homepage-post-options-save-hover-background-color",
				theme.dark.homepage_post_options_save_hover_background_color
			);

			document.documentElement.style.setProperty(
				"--log-homepage-post-options-save-hover-text-color",
				theme.dark.homepage_post_options_save_hover_text_color
			);
		} else {
			document.documentElement.style.setProperty(
				"--log-component-main-color",
				theme.light.component_main_color
			);
			document.documentElement.style.setProperty(
				"--log-navbar_user_color",
				theme.light.navbar_user_color
			);
			document.documentElement.style.setProperty(
				"--log-navbar-color",
				theme.light.navbar_color
			);

			document.documentElement.style.setProperty(
				"--log-navbar-user-name-color",
				theme.light.navbar_user_name_color
			);
			document.documentElement.style.setProperty(
				"--log-social-item-color",
				theme.light.social_colors
			);
			document.documentElement.style.setProperty(
				"--log-sidebar-color",
				theme.light.sidebar_color
			);
			document.documentElement.style.setProperty(
				"--log-post-color",
				theme.light.feed_post_color
			);
			document.documentElement.style.setProperty(
				"--log-body-color",
				theme.light.body_color
			);

			document.documentElement.style.setProperty(
				"--log-feed-post-author-name-color",
				theme.light.feed_post_author_name_color
			);
			document.documentElement.style.setProperty(
				"--log-feed-post-author-name-hover-color",
				theme.light.feed_post_author_name_hover_color
			);
			document.documentElement.style.setProperty(
				"--log-feed-post-publish-date-color",
				theme.light.feed_post_publish_date_color
			);

			document.documentElement.style.setProperty(
				"--log-feed-post-publish-date-hover-color",
				theme.light.feed_post_publish_date_hover_color
			);
			document.documentElement.style.setProperty(
				"--log-feed-post-title-color",
				theme.light.feed_post_title_color
			);

			document.documentElement.style.setProperty(
				"--log-feed-post-title-hover-color",
				theme.light.feed_post_title_hover_color
			);
			document.documentElement.style.setProperty(
				"--log-feed-post-tag-hover-outline-color",
				theme.light.feed_post_tag_hover_outline_color
			);
			document.documentElement.style.setProperty(
				"--log-feed-post-tag-hover-background-color",
				theme.light.feed_post_tag_hover_background_color
			);

			document.documentElement.style.setProperty(
				"--log-feed-post-tag-text-color",
				theme.light.feed_post_tag_text_color
			);

			document.documentElement.style.setProperty(
				"--log-homepage-sidebar-tab-icon-color",
				theme.light.homepage_sidebar_tab_icon_color
			);
			document.documentElement.style.setProperty(
				"--log-homepage-sidebar-tab-text-color",
				theme.light.homepage_sidebar_tab_text_color
			);
			document.documentElement.style.setProperty(
				"--log-homepage-post-options-text-color",
				theme.light.homepage_post_options_text_color
			);
			document.documentElement.style.setProperty(
				"--log-homepage-post-options-hover-text-color",
				theme.light.homepage_post_options_hover_text_color
			);

			document.documentElement.style.setProperty(
				"--log-homepage-post-options-save-background-color",
				theme.light.homepage_post_options_save_background_color
			);

			document.documentElement.style.setProperty(
				"--log-homepage-post-options-save-hover-background-color",
				theme.light.homepage_post_options_save_hover_background_color
			);

			document.documentElement.style.setProperty(
				"--log-homepage-post-options-save-hover-text-color",
				theme.light.homepage_post_options_save_hover_text_color
			);
			document.documentElement.style.setProperty(
				"--log-homepage-post-options-save-text-color",
				theme.light.homepage_post_options_save_text_color
			);
		}
	}
	handleTheme();
	return (
		<div
			className="theme-btn"
			onClick={() => dispatch(toggleDarkTheme(!darkThemeOn))}
		>
			{darkThemeOn ? (
				<FaMoon className="dark-icon" />
			) : (
				<FaSun className="light-icon" />
			)}
		</div>
	);
}
