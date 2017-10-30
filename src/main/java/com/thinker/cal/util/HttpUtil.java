/*      						
 * Copyright 2010 Beijing Xinwei, Inc. All rights reserved.
 * 
 * History:
 * ------------------------------------------------------------------------------
 * Date    	|  Who  		|  What  
 * 2017年3月31日	| lipengfeia 	| 	create the file                       
 */

package com.thinker.cal.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.URL;
import java.net.URLConnection;

import javax.net.ssl.HttpsURLConnection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 
 * 类简要描述
 * 
 * <p>
 * 类详细描述
 * </p>
 * 
 * @author lipengfeia
 * 
 */

public class HttpUtil {

	private static final Logger logger = LoggerFactory
			.getLogger(HttpUtil.class);
	private final static int CONNECT_TIMEOUT = 5000; // in milliseconds
	private final static String DEFAULT_ENCODING = "UTF-8";

	/**
	 * 请求微信支付等业务的http接口
	 * 
	 * @param urlStr
	 * @param data
	 * @param contentType
	 * @return
	 */
	public static String httpsReqData(String urlStr, String method,
			String data, String contentType) {
		BufferedReader reader = null;
		try {
			URL url = new URL(urlStr);
			HttpsURLConnection conn = (HttpsURLConnection) url.openConnection();
			conn.setDoOutput(true);
			conn.setConnectTimeout(CONNECT_TIMEOUT);
			conn.setReadTimeout(CONNECT_TIMEOUT);
			conn.setRequestMethod(method);
			if (contentType != null)
				conn.setRequestProperty("content-type", contentType);
			OutputStreamWriter writer = new OutputStreamWriter(
					conn.getOutputStream(), DEFAULT_ENCODING);
			if (data == null)
				data = "";
			writer.write(data);
			writer.flush();
			writer.close();

			reader = new BufferedReader(new InputStreamReader(
					conn.getInputStream(), DEFAULT_ENCODING));
			StringBuilder sb = new StringBuilder();
			String line = null;
			while ((line = reader.readLine()) != null) {
				sb.append(line);
				sb.append("\r\n");
			}
			return sb.toString();
		} catch (IOException e) {

			CalLog.error(logger, "httpReqData", null, data, e);
		} finally {
			try {
				if (reader != null) {
					reader.close();
				}
			} catch (IOException e) {
				CalLog.error(logger, "httpReqData release", null, data, e);
			}
		}
		return null;
	}

	public static String httpReqData(String urlStr, String data,
			String contentType) {
		BufferedReader reader = null;
		try {
			URL url = new URL(urlStr);
			URLConnection conn = url.openConnection();
			conn.setDoOutput(true);
			conn.setConnectTimeout(CONNECT_TIMEOUT);
			conn.setReadTimeout(CONNECT_TIMEOUT);
			if (contentType != null)
				conn.setRequestProperty("content-type", contentType);
			OutputStreamWriter writer = new OutputStreamWriter(
					conn.getOutputStream(), DEFAULT_ENCODING);
			if (data == null)
				data = "";
			writer.write(data);
			writer.flush();
			writer.close();

			reader = new BufferedReader(new InputStreamReader(
					conn.getInputStream(), DEFAULT_ENCODING));
			StringBuilder sb = new StringBuilder();
			String line = null;
			while ((line = reader.readLine()) != null) {
				sb.append(line);
				sb.append("\r\n");
			}
			return sb.toString();
		} catch (IOException e) {

			CalLog.error(logger, "postData", null, data, e);
		} finally {
			try {
				if (reader != null) {
					reader.close();
				}
			} catch (IOException e) {
				CalLog.error(logger, "postData release", null, data, e);
			}
		}
		return null;
	}

	// /**
	// * 双向认证的安全请求，用于退款
	// *
	// * @param urlStr
	// * @param sshData
	// * @return
	// * @throws Exception
	// */
	// public static String sshPostData(String urlStr, String sshData)
	// throws Exception {
	//
	// KeyStore keyStore = KeyStore.getInstance("PKCS12");
	// FileInputStream instream = new FileInputStream(new File(
	// "D:/apiclient_cert.p12"));
	// try {
	// keyStore.load(instream, "1480876362".toCharArray());
	// } catch (Exception e) {
	// e.printStackTrace();
	// } finally {
	// instream.close();
	// }
	//
	// // Trust own CA and all self-signed certs
	// SSLContext sslcontext = SSLContexts.custom()
	// .loadKeyMaterial(keyStore, "1480876362".toCharArray()).build();
	// // Allow TLSv1 protocol only
	// SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(
	// sslcontext, new String[] { "TLSv1" }, null,
	// SSLConnectionSocketFactory.BROWSER_COMPATIBLE_HOSTNAME_VERIFIER);
	// CloseableHttpClient httpclient = HttpClients.custom()
	// .setSSLSocketFactory(sslsf).build();
	//
	// try {
	//
	// HttpPost httpPost = new HttpPost(urlStr);
	// // 请求参数
	// StringEntity requestEntity = new StringEntity(sshData.toString());
	// httpPost.setEntity(requestEntity);
	//
	// log.debug(logger, "executing request", httpPost.getRequestLine());
	//
	// // 发送请求
	// CloseableHttpResponse response = httpclient.execute(httpPost);
	//
	// // 微信返回值
	// StringBuilder sb = new StringBuilder();
	// try {
	// HttpEntity responseEntity = (HttpEntity) response.getEntity();
	//
	// System.out.println("----------------------------------------");
	// log.debug(logger, "response status:", response.getStatusLine());
	// if (responseEntity != null) {
	// log.debug(logger, "Response content length: ",
	// ((org.apache.http.HttpEntity) responseEntity)
	// .getContentLength());
	// BufferedReader bufferedReader = new BufferedReader(
	// new InputStreamReader(
	// ((org.apache.http.HttpEntity) responseEntity)
	// .getContent()));
	// String text = null;
	// while ((text = bufferedReader.readLine()) != null) {
	// sb.append(text);
	// System.out.println(text);
	// }
	//
	// }
	// EntityUtils
	// .consume((org.apache.http.HttpEntity) responseEntity);
	// return sb.toString();
	// } finally {
	// response.close();
	// }
	// } finally {
	// httpclient.close();
	// }
	// }

}
