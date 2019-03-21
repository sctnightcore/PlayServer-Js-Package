const axios = require('axios');
const axiosFile = require('axios-file');

module.exports.get = {
  checksum: async function(url) {
    try {
    	let out = await axios({
        	method: 'POST',
        	url: `http://playserver.co/index.php/Vote/ajax_getpic/${url}`
    	});
      	return out.data.checksum;
    } catch (err) {
      return err.data;
    }
  }
}

module.exports.save = {
	checksum: async function(folderpath, imgname) {
		try {
			await axiosFile({
				url: `http://playserver.co/index.php/VoteGetImage/${imgname}`,
				method: 'get',
				savePath: `${folderpath}/${imgname}.png`
			});
		} catch (err) {
			return err.data;
		}
	}
}

module.exports.send = {
	checksum: async function(url, serverid, answer, gameid, checksum) {
	try {
          	var data = `server_id=${serverid}&captcha=${answer}&gameid=${gameid}&checksum=${checksum}`;
		var headers = {
			'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36',
			'Referer': `http://playserver.in.th/index.php/Vote/prokud/${url}`
		};
		let out = await axios({
			method: 'POST',
			url: `http://playserver.co/index.php/Vote/ajax_submitpic/${url}`,
			data: data,
			headers: headers
		});
		return out.data;
	} catch (err) {
	return err.data;
       	}
}

