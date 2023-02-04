import { Radio } from "antd";
const App = () => <Radio>Radio</Radio>;
export default App;
// import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
// import {
//   Button,
//   Cascader,
//   Checkbox,
//   DatePicker,
//   Form,
//   Input,
//   InputNumber,
//   message,
//   Radio,
//   Select,
//   Switch,
//   TreeSelect,
//   Upload,
// } from "antd";
// import { useState } from "react";
// const { RangePicker } = DatePicker;
// const { TextArea } = Input;
// const getBase64 = (img, callback) => {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => callback(reader.result));
//   reader.readAsDataURL(img);
// };
// const beforeUpload = (file) => {
//   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
//   if (!isJpgOrPng) {
//     message.error("You can only upload JPG/PNG file!");
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error("Image must smaller than 2MB!");
//   }
//   return isJpgOrPng && isLt2M;
// };
// const FormDisabledDemo = () => {
//   const [componentDisabled, setComponentDisabled] = useState(true);
//   const onFormLayoutChange = ({ disabled }) => {
//     setComponentDisabled(disabled);
//   };
//   const [loading, setLoading] = useState(false);
//   const [imageUrl, setImageUrl] = useState();
//   const handleChange = (info) => {
//     // Get this url from response in real world.
//     getBase64(info.file.originFileObj, (url) => {
//       setLoading(false);
//       setImageUrl(url);
//     });
//   };
//   const uploadButton = (
//     <div>
//       {loading ? <LoadingOutlined /> : <PlusOutlined />}
//       <div
//         style={{
//           marginTop: 8,
//         }}
//       >
//         Upload
//       </div>
//     </div>
//   );
//   return (
//     <>
//       <Checkbox
//         checked={componentDisabled}
//         onChange={(e) => setComponentDisabled(e.target.checked)}
//       >
//         Form disabled
//       </Checkbox>
//       <Form
//         labelCol={{
//           span: 4,
//         }}
//         wrapperCol={{
//           span: 14,
//         }}
//         layout="horizontal"
//         onValuesChange={onFormLayoutChange}
//         disabled={componentDisabled}
//         style={{
//           maxWidth: 600,
//         }}
//       >
//         <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
//           <Checkbox>Checkbox</Checkbox>
//         </Form.Item>
//         <Form.Item label="Radio">
//           <Radio.Group>
//             <Radio value="apple"> Apple </Radio>
//             <Radio value="pear"> Pear </Radio>
//           </Radio.Group>
//         </Form.Item>
//         <Form.Item label="Input">
//           <Input />
//         </Form.Item>
//         <Form.Item label="Select">
//           <Select>
//             <Select.Option value="demo">Demo</Select.Option>
//           </Select>
//         </Form.Item>
//         <Form.Item label="TreeSelect">
//           <TreeSelect
//             treeData={[
//               {
//                 title: "Light",
//                 value: "light",
//                 children: [
//                   {
//                     title: "Bamboo",
//                     value: "bamboo",
//                   },
//                 ],
//               },
//             ]}
//           />
//         </Form.Item>
//         <Form.Item label="Cascader">
//           <Cascader
//             options={[
//               {
//                 value: "zhejiang",
//                 label: "Zhejiang",
//                 children: [
//                   {
//                     value: "hangzhou",
//                     label: "Hangzhou",
//                   },
//                 ],
//               },
//             ]}
//           />
//         </Form.Item>
//         <Form.Item label="DatePicker">
//           <DatePicker />
//         </Form.Item>
//         <Form.Item label="RangePicker">
//           <RangePicker />
//         </Form.Item>
//         <Form.Item label="InputNumber">
//           <InputNumber />
//         </Form.Item>
//         <Form.Item label="TextArea">
//           <TextArea rows={4} />
//         </Form.Item>
//         <Form.Item label="Switch" valuePropName="checked">
//           <Switch />
//         </Form.Item>
//         <Form.Item label="Upload" valuePropName="fileList">
//           <Upload
//             name="avatar"
//             listType="picture-card"
//             className="avatar-uploader"
//             showUploadList={false}
//             beforeUpload={beforeUpload}
//             onChange={handleChange}
//             method="GET"
//           >
//             {imageUrl ? (
//               <img
//                 src={imageUrl}
//                 alt="avatar"
//                 style={{
//                   width: "100%",
//                 }}
//               />
//             ) : (
//               uploadButton
//             )}
//           </Upload>
//         </Form.Item>
//         <Form.Item label="Button">
//           <Button>Button</Button>
//         </Form.Item>
//       </Form>
//     </>
//   );
// };
// export default () => <FormDisabledDemo />;

// import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
// import { message, Upload } from "antd";
// import { useState } from "react";
// const getBase64 = (img, callback) => {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => callback(reader.result));
//   reader.readAsDataURL(img);
// };
// const beforeUpload = (file) => {
//   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
//   if (!isJpgOrPng) {
//     message.error("You can only upload JPG/PNG file!");
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error("Image must smaller than 2MB!");
//   }
//   return isJpgOrPng && isLt2M;
// };
// const Test = () => {
//   const [loading, setLoading] = useState(false);
//   const [imageUrl, setImageUrl] = useState();
//   const handleChange = (info) => {
//     // Get this url from response in real world.
//     getBase64(info.file.originFileObj, (url) => {
//       setLoading(false);
//       setImageUrl(url);
//     });
//   };
//   const uploadButton = (
//     <div>
//       {loading ? <LoadingOutlined /> : <PlusOutlined />}
//       <div
//         style={{
//           marginTop: 8,
//         }}
//       >
//         Upload
//       </div>
//     </div>
//   );
//   return (
//     <Upload
//       name="avatar"
//       listType="picture-card"
//       className="avatar-uploader"
//       showUploadList={false}
//       beforeUpload={beforeUpload}
//       onChange={handleChange}
//     >
//       {imageUrl ? (
//         <img
//           src={imageUrl}
//           alt="avatar"
//           style={{
//             width: "100%",
//           }}
//         />
//       ) : (
//         uploadButton
//       )}
//     </Upload>
//   );
// };
// export default Test;
