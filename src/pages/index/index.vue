<template>
	<view class="content">
		<view>
			<div>123</div>
			<button type=""></button>
			<button open-type="getUserInfo" class='show-author' bindgetuserinfo="getUserInfo">
				<view class='get-userinfo'>获取用户信息</view>
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			wx.login({	//先调用 wx.login() 获取 临时登录凭证code 
				success: res =>{
					console.log('res',res)
					const code = res.code 	//获取到用户临时登录凭证code 
					wx.request({	//发送请求
						url: "https://greecegods.com.cn/wx",	//携带code
						data: {
							code: res.code
						},
						success: (res) =>{	//返回node请求到的OpenID与session_key
							const openid = res.data.openid
							wx.setStorageSync("openid", openid)
						}
					})
				},
				fail: console.log
			})

			wx.getSetting({
				success: (res) => {
					console.log('res',res)
				}
			})
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
