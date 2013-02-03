# Athenian.me

This repository holds the source code and all files for
[http://athenian.me](http://athenian.me).

### Tools

Here are some of the tools used to put together this repo.

* [Markdown][markdown] is a language that lets you write easy-to-read text,
which can be converted easily to HTML. For example, surrounding text with
bullets, \*like this\*, will convert that to italics in HTML, *like this*.

    This README is a Markdown file.  In addition, the `index.md` file is
    a Markdown file, which is auto-converted to the `index.html` file. The
    `index.html` file is what you read when you visit the site homepage.

* [Markdown.css][markdown.css] is a CSS tool I wrote to make your Markdown HTML
output look pretty, without much effort. It converts everything to Georgia,
adds spaces and padding where needed.

* [Fabric][fabric] is a tool that lets you move code from your local computer
to a remote server (the one hosting athenian.me) in one command. For example,
I can type:

        fab deploy

    And any changes I've made on my laptop will get pushed to the athenian.me
    website. This is an *extremely* useful tool that saves a ton of time when
    pushing new code to the website.

* [Git][git] is a tool that lets you keep track of various versions of a file,
  without having to save different files with names like "Homepage", "Homepage
  1 (revised)", "Homepage 1 (new) (revised) (copy)", etc. Git keeps track of
  the *differences* between versions of your file, and you can flip between
  them at will. [Click here][commits] to see the updates that have been made to
  the files in this folder.

[markdown]: http://daringfireball.net/projects/markdown/
[markdown.css]: http://kevinburke.bitbucket.org/markdowncss/
[fabric]: http://docs.fabfile.org/en/1.5/
[git]: https://help.github.com/
[commits]: https://github.com/kevinburke/athenian.me/commits/master

### Improvements

There are a lot of improvements I'd like to make! Feel free to help out.

* Adding a Profiles page with a photo and description of each student.
* Adding unique subdomains for each student.
* Adding instructions for uploading files via FTP to each subdomain.
