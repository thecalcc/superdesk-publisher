import React from "react";
import PropTypes from "prop-types";

import ArticleStatusLabel from "../UI/ArticleStatusLabel";

const PreviewStatusLabels = ({ articles }) => {
  let isPublishedFbia = false;
  let isPublishedAppleNews = false;

  articles.forEach((article) => {
    if (article.is_published_fbia) isPublishedFbia = true;
    if (article.is_published_to_apple_news) isPublishedAppleNews = true;
  });

  return (
    <React.Fragment>
      {articles.filter((item) => item.status === "published").length ? (
        <div className="form__row form__row--small-padding">
          <label>Published to:</label>
          <div>
            {articles
              .filter((item) => item.status === "published")
              .map((article, index) => (
                <ArticleStatusLabel
                  key={`articlePreviewstatuslabel_${index}_${article.id}`}
                  article={article}
                  style={{ marginRight: ".6em" }}
                  url={
                    article.tenant.subdomain
                      ? "http://" +
                        article.tenant.subdomain +
                        "." +
                        article.tenant.domain_name +
                        article._links.online.href
                      : "http://" +
                        article.tenant.domain_name +
                        article._links.online.href
                  }
                />
              ))}
            {isPublishedFbia ? (
              <span
                className="label label--primary"
                style={{ marginRight: ".6em" }}
              >
                facebook
              </span>
            ) : null}
            {isPublishedAppleNews ? (
              <span
                className="label label--highlight2"
                style={{ marginRight: ".6em" }}
              >
                Apple News
              </span>
            ) : null}
          </div>
        </div>
      ) : null}
      {articles.filter((item) => item.status === "new").length ? (
        <div className="form__row form__row--small-padding">
          <label>Sent to:</label>
          <div>
            {articles
              .filter((item) => item.status === "new")
              .map((article, index) => (
                <ArticleStatusLabel
                  key={`articlePreviewstatuslabel_${index}_${article.id}`}
                  article={article}
                  style={{ marginRight: ".6em" }}
                />
              ))}
          </div>
        </div>
      ) : null}
      {articles.filter((item) => item.status === "unpublished").length ? (
        <div className="form__row form__row--small-padding">
          <label>Unpublished from:</label>
          <div>
            {articles
              .filter((item) => item.status === "unpublished")
              .map((article, index) => (
                <ArticleStatusLabel
                  key={`articlePreviewstatuslabel_${index}_${article.id}`}
                  article={article}
                  style={{ marginRight: ".6em" }}
                />
              ))}
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

PreviewStatusLabels.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default PreviewStatusLabels;
