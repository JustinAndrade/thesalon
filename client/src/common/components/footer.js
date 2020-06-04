import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import {
  FaPinterestP,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaInstagram,
  FaMapMarker,
} from "react-icons/fa";
import "tachyons";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteTitle: title
            mailChimpUrl
            pinterest
            facebook
            twitter
            youtube
            github
          }
        }
      }
    `}
    render={(data) => (
      <footer className="pa2 bg-dark-gray near-white pv5">
        <div className="flex flex-wrap justify-around w-100 mw9 center mb5">
          <div className="w-100 mw5 mb4">
            <span className="display f2">
              {data.site.siteMetadata.siteTitle}
            </span>
            <hr />
            <div className="w-30 flex justify-around items-center pv2">
              {data.site.siteMetadata.facebook && (
                <a
                  target="_blank"
                  className="near-white"
                  href={data.site.siteMetadata.facebook}
                >
                  <FaFacebookF />
                </a>
              )}
              <a
                className="near-white"
                target="_blank"
                href="https://www.instagram.com/thesalon_nb/"
              >
                <FaInstagram />
              </a>
              {data.site.siteMetadata.twitter && (
                <a className="near-white" href={data.site.siteMetadata.twitter}>
                  <FaTwitter />
                </a>
              )}
            </div>
            <address>
              277 Dartmouth Street <br />
              New Bedford, Massachusetts <br />
              02740 <br />
              (774)-328-9720
            </address>
          </div>
          <div className="flex flex-column">
            <span className="near-white sans-serif f5 tracked mb3 db">
              WRITING BY {data.site.siteMetadata.siteTitle}
            </span>
            <Link
              to="/blog"
              className="near-white sans-serif f5 tracked pv1 db"
            >
              ALL POSTS
            </Link>
            <Link
              to="/rss.xml"
              className="near-white sans-serif f5 tracked pv1 db"
            >
              RSS FEED
            </Link>
          </div>
          <div className="flex flex-column">
            <span className="near-white sans-serif f5 tracked mb3 db">
              MORE ON {data.site.siteMetadata.siteTitle}
            </span>
            <Link
              to="/about"
              className="near-white sans-serif f5 tracked pv1 db"
            >
              ABOUT US
            </Link>
          </div>
        </div>
        <div className="w-100 mw9 center silver mb3">
          <div className="w-100 bb b--mid-gray mv3"></div>
          <div className="flex w-100 mw6 items-center justify-center justify-start-ns">
            <Link
              to="/privacy"
              className="silver sans-serif f5 tracked pv1 db mh1"
            >
              PRIVACY
            </Link>
          </div>
        </div>
        <div className="w-100 mw9 silver center sans-serif f6">
          <p>
            The Salon (C) 2020 by Justin Andrade under terms of the "MIT"
            software license.
          </p>
        </div>
      </footer>
    )}
  />
);
