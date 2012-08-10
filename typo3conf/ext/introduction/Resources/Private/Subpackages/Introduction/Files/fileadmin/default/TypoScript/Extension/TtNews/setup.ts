/*
The TT_NEWS template

The name says it all, this is a news plugin.

For a full description of the configuration options, check the manual of this
extension. Extension manuals are normally included in the extensions as Open
Office documents, and can be accessed directly from the module Ext Manager in
the TYPO3 backend (select the option 'loaded extensions or install extension').
*/

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:tt_news/pi/static/ts_new/setup.txt">

plugin.tt_news {
	templateFile = {$filepaths.extensiontemplates}tt_news/tx_ttnews_pi1_template.html
	dontUseBackPid = 1
	excludeAlreadyDisplayedNews = 0
	noNewsToListMsg_stdWrap.wrap = <p>|</p>

	displaySingle {
		subheader_stdWrap.wrap = <div class="news-single-subheader">|</div>
		image {
			file.maxW = 250
			file.maxH = 300
			#imageLinkWrap = 0
		}
	}

	# define rendering of LATEST mode
	displayLatest {
		subheader_stdWrap.cObject >

		subheader_stdWrap {
			stripHtml = 1
			crop = 70 | ... | 1
			ifEmpty.field = bodytext
			required = 1
		}
		/*
		image {
			file.maxW = 60
			file.maxH = 60
			imageLinkWrap = 0
		}
		*/
	}

	# rendering of LIST mode
	displayList {
		subheader_stdWrap {
			crop = 250 | ... | 1
			required = 1
			wrap >
		}
		content_stdWrap {
			wrap = <div class="news-list-content">|</div>
			required = 1
		}
		image {
			file.maxW = 175
			file.maxH = 175
			imageLinkWrap = 0
		}
	}

	# Override some of the text labels for tt_news with our own text.
	# See EXT:tt_news/pi/locallang.xml for all language labels
	_LOCAL_LANG.default {
		# Remove the header that tt_news adds by default above the LATEST listing
		latestHeader =

		# replace the word 'more' after article text in news list or latest with '>>'
		more = >>
	}

	# Date & time formats for news display. The easiest way to change them is by changing the values
	# of the constants in TypoScript template ROOT in the root folder of the TypoScript Templates.
	# There are configuration options for various types of news display. If you want, you can modify
	# each separately according to your own preferences.

	archiveTitleCObject {
		10.strftime = %Y-%B
	}
	getRelatedCObject.10 {
		default.20.strftime = {$plugin.tt_news.dateformat} {$plugin.tt_news.timeformat}
		1.20.strftime = {$plugin.tt_news.dateformat} {$plugin.tt_news.timeformat}
		2.20.strftime = {$plugin.tt_news.dateformat} {$plugin.tt_news.timeformat}
	}
	displaySingle {
		date_stdWrap.strftime = {$plugin.tt_news.dateformat}
		time_stdWrap.strftime = {$plugin.tt_news.timeformat}
	}
	displayLatest {
		date_stdWrap.strftime = {$plugin.tt_news.dateformat}
		time_stdWrap.strftime = {$plugin.tt_news.timeformat}
	}
	displayList {
		date_stdWrap.strftime = {$plugin.tt_news.dateformat}
		time_stdWrap.strftime = {$plugin.tt_news.timeformat}
	}
}
