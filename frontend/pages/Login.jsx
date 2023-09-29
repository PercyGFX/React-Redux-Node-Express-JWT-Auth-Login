import React from 'react'
import { Layout, Row, Col } from "antd";
import '../src/App.css';

export default function Login() {
    return(
    <Layout>
        <Row>
            <Col className="custom-col" span={4}>Logo here</Col>
            <Col span={20}>Nav here</Col>
        </Row>

        <Row>
            Login Area
        </Row>

    </Layout>

    )
}