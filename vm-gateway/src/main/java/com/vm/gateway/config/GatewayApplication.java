package com.vm.gateway.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.web.filter.CorsFilter;

/**
 * Created by ZhangKe on 2017/12/26.
 */
@EnableDiscoveryClient
@SpringBootApplication
@EnableZuulProxy // 使用@EnableZuulProxy来开启Zuul的支持，如果你不想使用Zuul提供的Filter和反向代理的功能的话，此处可以使用@EnableZuulServer注解
public class GatewayApplication {
    public static void main(String[] args) {

        SpringApplication springApplication = new SpringApplication(GatewayApplication.class);
        springApplication.run(args);

    }

    @Bean
    public ConsoleLogConfig logFilter(){
        return new ConsoleLogConfig();
    }

    @Bean
    public CorsFilter corsFilter() {

        return new CorsConfig().CorsConfig();
    }
}