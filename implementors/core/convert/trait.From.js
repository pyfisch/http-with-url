(function() {var implementors = {};
implementors["http"] = ["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"http/header/struct.HeaderName.html\" title=\"struct http::header::HeaderName\">HeaderName</a>&gt; for <a class=\"struct\" href=\"http/header/struct.HeaderName.html\" title=\"struct http::header::HeaderName\">HeaderName</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Custom&gt; for <a class=\"struct\" href=\"https://docs.rs/bytes/0.4/bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"http/header/struct.HeaderName.html\" title=\"struct http::header::HeaderName\">HeaderName</a>&gt; for <a class=\"struct\" href=\"https://docs.rs/bytes/0.4/bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"http/header/struct.HeaderValue.html\" title=\"struct http::header::HeaderValue\">HeaderValue</a>&gt; for <a class=\"struct\" href=\"https://docs.rs/bytes/0.4/bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"http/status/struct.StatusCode.html\" title=\"struct http::status::StatusCode\">StatusCode</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"http/uri/struct.Parts.html\" title=\"struct http::uri::Parts\">Parts</a>&gt; for <a class=\"struct\" href=\"http/uri/struct.Uri.html\" title=\"struct http::uri::Uri\">Uri</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"http/uri/struct.Uri.html\" title=\"struct http::uri::Uri\">Uri</a>&gt; for <a class=\"struct\" href=\"http/uri/struct.Parts.html\" title=\"struct http::uri::Parts\">Parts</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"http/uri/struct.Scheme.html\" title=\"struct http::uri::Scheme\">Scheme</a>&gt; for <a class=\"struct\" href=\"https://docs.rs/bytes/0.4/bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"http/uri/struct.Authority.html\" title=\"struct http::uri::Authority\">Authority</a>&gt; for <a class=\"struct\" href=\"https://docs.rs/bytes/0.4/bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"http/uri/struct.OriginForm.html\" title=\"struct http::uri::OriginForm\">OriginForm</a>&gt; for <a class=\"struct\" href=\"https://docs.rs/bytes/0.4/bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ErrorKind&gt; for <a class=\"struct\" href=\"http/uri/struct.InvalidUri.html\" title=\"struct http::uri::InvalidUri\">InvalidUri</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ErrorKind&gt; for <a class=\"struct\" href=\"http/uri/struct.InvalidUriBytes.html\" title=\"struct http::uri::InvalidUriBytes\">InvalidUriBytes</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Scheme2&gt; for <a class=\"struct\" href=\"http/uri/struct.Scheme.html\" title=\"struct http::uri::Scheme\">Scheme</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ByteStr&gt; for <a class=\"struct\" href=\"https://docs.rs/bytes/0.4/bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"http/status/struct.InvalidStatusCode.html\" title=\"struct http::status::InvalidStatusCode\">InvalidStatusCode</a>&gt; for <a class=\"struct\" href=\"http/struct.Error.html\" title=\"struct http::Error\">Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"http/method/struct.InvalidMethod.html\" title=\"struct http::method::InvalidMethod\">InvalidMethod</a>&gt; for <a class=\"struct\" href=\"http/struct.Error.html\" title=\"struct http::Error\">Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"http/uri/struct.InvalidUri.html\" title=\"struct http::uri::InvalidUri\">InvalidUri</a>&gt; for <a class=\"struct\" href=\"http/struct.Error.html\" title=\"struct http::Error\">Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"http/uri/struct.InvalidUriBytes.html\" title=\"struct http::uri::InvalidUriBytes\">InvalidUriBytes</a>&gt; for <a class=\"struct\" href=\"http/struct.Error.html\" title=\"struct http::Error\">Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"http/header/struct.InvalidHeaderName.html\" title=\"struct http::header::InvalidHeaderName\">InvalidHeaderName</a>&gt; for <a class=\"struct\" href=\"http/struct.Error.html\" title=\"struct http::Error\">Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"http/header/struct.InvalidHeaderNameBytes.html\" title=\"struct http::header::InvalidHeaderNameBytes\">InvalidHeaderNameBytes</a>&gt; for <a class=\"struct\" href=\"http/struct.Error.html\" title=\"struct http::Error\">Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"http/header/struct.InvalidHeaderValue.html\" title=\"struct http::header::InvalidHeaderValue\">InvalidHeaderValue</a>&gt; for <a class=\"struct\" href=\"http/struct.Error.html\" title=\"struct http::Error\">Error</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"http/header/struct.InvalidHeaderValueBytes.html\" title=\"struct http::header::InvalidHeaderValueBytes\">InvalidHeaderValueBytes</a>&gt; for <a class=\"struct\" href=\"http/struct.Error.html\" title=\"struct http::Error\">Error</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()